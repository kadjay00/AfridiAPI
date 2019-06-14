import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRINTERDEFAULT', {schema: 'dbo' } )
export class T_PRINTERDEFAULT {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PRS_PAPERID_C',
        })
    public PRS_PAPERID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'PRS_PRINTERID_C',
        })
    public PRS_PRINTERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'PRS_TRAYID_N',
        })
    public PRS_TRAYID_N: string | null;

}
