import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRINTERDEFAULT2', {schema: 'dbo' } )
export class T_PRINTERDEFAULT2 {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 50,
        name: 'PRS_PRINTERID_C',
        })
    public PRS_PRINTERID_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 5,
        name: 'PRS_TRAYID_N',
        })
    public PRS_TRAYID_N: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PRS_PAPERID_C',
        })
    public PRS_PAPERID_C: string;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'PRS_PRIORITY_N',
        })
    public PRS_PRIORITY_N: number | null;

}
