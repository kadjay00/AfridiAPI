import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRINTERACTUALPAPER', {schema: 'dbo' } )
export class T_PRINTERACTUALPAPER {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 50,
        name: 'PAP_PRINTERID_C',
        })
    public PAP_PRINTERID_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 5,
        name: 'PAP_TRAYID_C',
        })
    public PAP_TRAYID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PAP_PAPERID_C',
        })
    public PAP_PAPERID_C: string | null;

}
