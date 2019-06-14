import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_REPRISE_SCALE_REQUEST_BGRID', {schema: 'dbo' } )
export class T_REPRISE_SCALE_REQUEST_BGRID {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RSB_ID_N',
        })
    public RSB_ID_N: number;

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'RSB_BGRID_N',
        })
    public RSB_BGRID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'RSB_BRAND_C',
        })
    public RSB_BRAND_C: string;

    @Column('varchar', {
        nullable: true,
        name: 'RSB_DESCRIPTION_C',
        })
    public RSB_DESCRIPTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'RSB_STATE_C',
        })
    public RSB_STATE_C: string | null;

    @Column('smallint', {
        nullable: true,
        name: 'RSB_FILES_N',
        })
    public RSB_FILES_N: number | null;

    @Column('varchar', {
        nullable: true,
        name: 'RSB_PATH_C',
        })
    public RSB_PATH_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'RSB_MSG_C',
        })
    public RSB_MSG_C: string | null;

}
