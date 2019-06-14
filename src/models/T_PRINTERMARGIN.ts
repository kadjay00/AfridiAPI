import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRINTERMARGIN', {schema: 'dbo' } )
export class T_PRINTERMARGIN {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 50,
        name: 'PRM_PRINTERID_C',
        })
    public PRM_PRINTERID_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PRM_PAPERID_C',
        })
    public PRM_PAPERID_C: string;

    @Column('int', {
        nullable: true,
        name: 'PRM_TOPMARGIN_N',
        })
    public PRM_TOPMARGIN_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PRM_LEFTMARGIN_N',
        })
    public PRM_LEFTMARGIN_N: number | null;

}
