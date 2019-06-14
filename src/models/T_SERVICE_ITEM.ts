import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SERVICE_ITEM', {schema: 'dbo' } )
export class T_SERVICE_ITEM {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'SIT_IDNUMBER_C',
        })
    public SIT_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        length: 10,
        name: 'SIT_LOGOID_C',
        })
    public SIT_LOGOID_C: string;

    @Column('decimal', {
        nullable: false,
        precision: 4,
        scale: 2,
        name: 'SIT_FATPERCENTAGE_D',
        })
    public SIT_FATPERCENTAGE_D: number;

    @Column('varchar', {
        nullable: false,
        length: 10,
        name: 'SIT_CODENATURE_C',
        })
    public SIT_CODENATURE_C: string;

    @Column('varchar', {
        nullable: false,
        length: 10,
        name: 'SIT_CODEMILK_C',
        })
    public SIT_CODEMILK_C: string;

    @Column('varchar', {
        nullable: false,
        length: 10,
        name: 'SIT_STICKERID_C',
        })
    public SIT_STICKERID_C: string;

    @Column('varchar', {
        nullable: false,
        length: 10,
        name: 'SIT_UPDATEFLAG_C',
        })
    public SIT_UPDATEFLAG_C: string;

}
